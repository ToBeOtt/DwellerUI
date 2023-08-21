import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../config/apiConfig';


export default function NewMeeting() {
  const [meetingDate, setMeetingDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendMeetingData = async () => {
    try {
      const response = await fetch(`${baseUrl}/meeting/AddMeeting`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({
          meetingDate,
        }),
      });
      
      if (response.ok) {
        const meetingData = await response.json();
        localStorage.setItem('meetingData', meetingData);
        handleClose(); 
      } else if(response.status === 401) {
          navigate('/LoginPage');
      } 
      else {
        const responseData = await response.json();
        if (responseData.statusCode === 102) {
          setErrorMessage(responseData.message);
        } else {
          console.error('Error on date selection');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
         <button onClick={handleShow} className="block mx-auto px-4 py-1 text-sm text-white-600 
                                             font-semibold rounded-full border 
                                             border-black-200 hover:text-white 
                                             hover:bg-slate-700 hover:border-transparent 
                                             focus:outline-none focus:ring-2 focus:ring-slate-900 
                                             focus:ring-offset-2 bg-dweller-blue text-white">
             + Datumlägg nytt möte
         </button>
        
        
        {errorMessage ? (
           <Modal
           show={show}
           onHide={handleClose}
           backdrop="static"
           keyboard={false}
         >
           <Modal.Header closeButton>
            <Modal.Title>
          </Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <p className="text-sm text-red-700 text-center">{errorMessage}</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
          ) : (
            // Render something else if errorMessage is not set
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
        <Modal.Header closeButton>
            <Modal.Title>
              Välj datum för möte
            </Modal.Title>
            </Modal.Header>
        <Modal.Body>
        <div className="text-center">
            <DatePicker
                selected={meetingDate}
                onChange={date => setMeetingDate(date)}
                dateFormat="yyyy-MM-dd HH:mm"
                minDate={new Date()}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Tidpunkt"
                placeholderText="Select date and time"
                popperPlacement="bottom-end" 
            />
        </div>
        </Modal.Body>
        <Modal.Footer>
        <button className ="text-center" onClick={sendMeetingData}>Välj tid</button>
        </Modal.Footer>
      </Modal>
          )}
        
    </>
  );
}
