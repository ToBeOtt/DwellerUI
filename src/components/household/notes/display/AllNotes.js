import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteModal from './NoteModal';
import { NoteIcon } from '../../../layout/svg/FormIcons';
import NoteService from '../NoteService';
import { useNoteContext } from '../../../../contexts/NoteContext';


export default function AllNotes() {
  const { notes, setNotes } = useNoteContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleModalOpen = (noteId) => {
    console.log(noteId)
    setSelectedNoteId(noteId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    NoteService.getNotes()
      .then(data => {
        const notesData = data.notes;
        setNotes(notesData);
        console.log('Data in local storage');
      })
      .catch(error => {
        if (error.message === 'Unauthorized') {
          navigate('/LoginPage');
        } else {
          console.error('Error:', error);
        }
      });
  }, [navigate]);

  return (
    <>
      <h6 className="font-titleFont font-bold text-black text-left mb-4">
        Anteckningar
      </h6>

      {Array.isArray(notes) && notes.map((point, index) => (
        <div className="flex space-x-4 items-center justify-start" key={index}>
         <button 
            className="flex flex-row items-center"
            onClick={() => handleModalOpen(point.noteId)}>
          <NoteIcon />
          <p className="ml-2">{point.name}</p>
          </button> 
        </div>
      ))}
      <NoteModal
        noteId={selectedNoteId} 
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
