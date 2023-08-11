import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button onClick={handleShow} className="px-4 py-1 text-sm text-white-600 
                                            font-semibold rounded-full border 
                                            border-black-200 hover:text-white 
                                            hover:bg-red-800 hover:border-transparent 
                                            focus:outline-none focus:ring-2 focus:ring-red-600 
                                            focus:ring-offset-2 bg-red-900 text-white">
            Mutate
        </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
            <Modal.Title>
                Update evil information
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form 
              id='editModal' 
              class="w-full max-w-sm"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent refresh
                console.log('UpdateEmployee function called');
                props.UpdateEmployee(props.id, name, role)
            }}>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Name
                    </label>
                    </div>
                    <div class="md:w-2/3">

            {/* value är knutet till props-name i comp Employee. Nästa steg är onChange som tar const role/name och ändrar detta */}

                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                                        leading-tight focus:outline-none focus:bg-white focus:border-red-900" 
                                        id="name" 
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                                        leading-tight focus:outline-none focus:bg-white focus:border-red-900" 
                                        id="role" 
                                        type="text" 
                                        value={role}
                                        onChange={(e) => {
                                            setRole(e.target.value);
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
          {/* button form gör det möjligt att använda denna knapp utanför vanliga formet. Denna button
          är knuten till form-id ovan som är 'editModal'. */}
          <button form="editModal" 
                    className="px-4 py-1 text-sm text-white-600 
                        font-semibold rounded-full border 
                        border-white-200 hover:text-white 
                        hover:bg-gray-600 hover:border-transparent 
                        focus:outline-none focus:ring-1 focus:ring-white-900 
                        focus:ring-offset-2 bg-gray-900 text-white">
                Apply
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;