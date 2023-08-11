import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [show, setShow] = useState(false);

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [img, setImg] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className="block mx-auto px-4 py-1 text-sm text-white-600 
                                                font-semibold rounded-full border 
                                                border-black-200 hover:text-white 
                                                hover:bg-red-800 hover:border-transparent 
                                                focus:outline-none focus:ring-2 focus:ring-red-600 
                                                focus:ring-offset-2 bg-red-900 text-white">
                + Add Evil
            </button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
                <Modal.Title>
                    Add new evil
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <form 
                    id='editModal' 
                    class="w-full max-w-sm"
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevent refresh
                        setName('');
                        setRole('');
                        setImg('');
                        props.newEmployee(name, role, img)
                    }}>
                    
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                            Name
                        </label>
                        </div>
                        <div class="md:w-2/3">
    
                {/* value är knutet till props-name i comp Employee. Nästa steg är onChange som tar const role/name och ändrar detta */}
    
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 
                                            leading-tight focus:outline-none focus:bg-white focus:border-red-900" 
                                            id="name" 
                                            placeholder="name of evil"
                                            type="text" 
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                            />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                            Profession
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 
                                            leading-tight focus:outline-none focus:bg-white focus:border-red-900" 
                                            id="role" 
                                            placeholder="Profession"
                                            type="text" 
                                            value={role}
                                            onChange={(e) => {
                                                setRole(e.target.value);
                                            }}
                                            /> 
                        </div>
                    </div>

                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
                            Image
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 
                                            leading-tight focus:outline-none focus:bg-white focus:border-red-900" 
                                            id="img" 
                                            placeholder="https//www.google.com"
                                            type="text" 
                                            value={img}
                                            onChange={(e) => {
                                                setImg(e.target.value);
                                            }}
                                            /> 
                        </div>
                    </div>
                </form>
                </Modal.Body>
            <Modal.Footer>
              <button onClick={handleClose} 
                        className="px-4 py-1 text-sm text-white-600 
                            font-semibold rounded-full border 
                            border-red-200 hover:text-white 
                            hover:bg-red-600 hover:border-transparent 
                            focus:outline-none focus:ring-1 focus:ring-red-900 
                            focus:ring-offset-2 bg-red-900 text-white">
                    Close
              </button>

              <button form="editModal"
                        onClick={handleClose} 
                        className="px-4 py-1 text-sm text-white-600 
                            font-semibold rounded-full border 
                            border-white-200 hover:text-white 
                            hover:bg-gray-600 hover:border-transparent 
                            focus:outline-none focus:ring-1 focus:ring-white-900 
                            focus:ring-offset-2 bg-gray-900 text-white">
                    Add
              </button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default AddEmployee;