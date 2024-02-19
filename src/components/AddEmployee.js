import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImage] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button onClick={handleShow} className="block mx-auto m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            + Add Employee
        </button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="editmodal"
            onSubmit={(e)=>{
                e.preventDefault();
                props.newEmployee(name,role,img);
                console.log(name,role,img);
                setName('');
                setRole('');
                setImage('');
                }
            }>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                        <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="text" name="name" id="name" autocomplete="name" placeholder="Kit" className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            />
                            </div>
                        </div>
                        </div>

                        <div className="col-span-full">
                            <label for="role" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                            <div className="mt-2">
                            <input type="role" name="role" id="role" autocomplete="name" placeholder='HR' className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                            value={role} 
                            onChange={(e)=>{setRole(e.target.value)}}
                            />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label for="img" className="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
                            <div className="mt-2">
                            <input type="img" name="img" id="img" autocomplete="name" placeholder='http://google.com' className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                            value={img} 
                            onChange={(e)=>{setImage(e.target.value)}}
                            />
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
            form = "editmodal"
            onClick={handleClose}>
                Add
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClose}>Close</button>
        </Modal.Footer>
        </Modal>
    </>
  );
}

export default AddEmployee;