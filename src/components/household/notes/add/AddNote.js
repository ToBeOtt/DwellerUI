import { useState, useEffect } from 'react';
import baseUrl from '../../../../config/apiConfig';
import { useNavigate } from 'react-router-dom';

export default function AddNote(props) { 

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [noteStatus, setNoteStatus] = useState(0);
    const [notePriority, setNotePriority] = useState(0);
    const [category, setCategory] = useState(0);
    const [noteholderId, setNoteholderId] = useState(null);
    const [file, setFile] = useState('');

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
                date,
                noteStatus,
                notePriority,
                category,
                file,
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
            
          <div className="flex flex-row">
                  <input 
                      className="mb-2 mr-2 shadow-sm appearance-none border rounded py-1 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline" 
                      id="title" 
                      type="text" 
                      placeholder="Titel" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      />

                  <input 
                      className="mb-2 shadow-sm appearance-none border rounded py-1 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline" 
                      id="title" 
                      type="text" 
                      placeholder="Datum?" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      />
                </div>
        
            <textarea
              className="mb-2 shadow-sm appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="noteDesc"
              placeholder="Beskrivning"
              value={desc}
              rows="6"
              onChange={(e) => setDesc(e.target.value)}
            />
          <div className="flex flex-row">
              <select
                className="mb-3 mr-2 shadow-sm appearance-none border rounded py-1 px-3 text-gray-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                value={noteStatus}
                onChange={(e) => setNoteStatus(e.target.value)}
              >
                <option value={''}>Status</option>
                <option value={0}>Avvakta</option>
                <option value={1}>Startad</option>
                <option value={2}>Klar</option>
              </select>

              <select
                className="mb-3 mr-2 block shadow-sm appearance-none border rounded py-1 px-3 text-gray-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                id="prio"
                value={notePriority}
                onChange={(e) => setNotePriority(e.target.value)}
              >
                <option value={''}>Prio</option>
                <option value={0}>Låg</option>
                <option value={1}>Normal</option>
                <option value={2}>Akut</option>
              </select>
         
              <select
                className="mb-3 mr-2 block shadow-sm appearance-none border rounded py-1 px-3 text-gray-400 text-sm leading-tight focus:outline-none focus:shadow-outline"
                id="prio"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                  <option value={''}>Övrigt</option>
                  <option value={0}>Husmöten</option>
                  <option value={1}>Projekt</option>
                  <option value={2}>Att göra</option>
                  <option value={3}>Kalender</option>
              </select>

              </div>
              <input 
                      className="mb-2 mr-2 shadow-sm appearance-none border rounded py-1 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline" 
                      id="title" 
                      type="text" 
                      placeholder="Lägg till fil.." 
                      value={file}
                      onChange={(e) => setFile(e.target.value)}
                      />
          <div className="flex items-center space-x-5 mt-3">
            <button
                className="bg-teal-900 hover:bg-teal-800 text-dweller-text text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={HandleAddNote}
                >
              Lägg till anteckning
            </button>
          </div>

        </form>
      </div>
    </>
  );  
}