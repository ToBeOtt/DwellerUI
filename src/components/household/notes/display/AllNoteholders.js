import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteholderModal from './NoteholderModal.js';
import NoteService from '../NoteService.js';
import { NoteholderIcon } from '../../../layout/svg/FormIcons.js';

export default function AllNoteholders() {
    const [noteholders, setNoteholders] = useState([]);
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNoteholderId, setSelectedNoteholderId] = useState(null);

    const handleModalOpen = (noteholderId) => {
        console.log(noteholderId)
        setSelectedNoteholderId(noteholderId);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    
    useEffect(() => {
        NoteService.getNoteholders()
          .then(data => {
            const noteholderData = data.noteholders;
            setNoteholders(noteholderData);
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
            Anteckningssamlingar
          </h6>
    
          {Array.isArray(noteholders) && noteholders.map((point, index) => (
            <div className="flex space-x-4 items-center justify-start" key={index}>
             <button 
                className="flex flex-row items-center"
                onClick={() => handleModalOpen(point.noteholderId)}>
              <NoteholderIcon />
              <p className="ml-2">{point.name}</p>
              </button> 
            </div>
          ))}
    
          <NoteholderModal
            noteholderId={selectedNoteholderId} 
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        </>
      );
    }
