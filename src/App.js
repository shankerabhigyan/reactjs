import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
    const [role, setRole] = useState('dev');
    const showEmployees = true;
    const [employees, setEmployees] = useState(
        [
            {
                id:1,
                name:"Ron", 
                role:"Developer", 
                img:"https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
            },
            {
                id:2,
                name:"Steph", 
                role:"Tester", 
                img:"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg"
            },
            {
                id:3,
                name:"Karl", 
                role:"Security", 
                img:"https://images.pexels.com/photos/20787/pexels-photo.jpg"
            },
            {
                id:4,
                name:"Moss", 
                role:"DevOps", 
                img:"https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg"
            },
            {
                id:5,
                name:"Spongebob", 
                role:"Manager", 
                img:"https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg"
            },
            {
                id:6,
                name:"Booba", 
                role:"Sales", 
                img:"https://images.pexels.com/photos/1576193/pexels-photo-1576193.jpeg"
            }
        ]
    );
    function updateEmployee(id,newName,newRole,newImage){
        const updatedEmployees = employees.map((employee)=>{
            if(employee.id === id){
                return {...employee,name:newName,role:newRole, img:newImage};
            }
            return employee;
        });
        setEmployees(updatedEmployees);
    }

    function newEmployee(name,role,img){
        const newEmployee = {
            id:uuidv4(),
            name:name,
            role:role,
            img:img
        };
        setEmployees([...employees,newEmployee]);
    }
    return (
        <div className="App">
            {showEmployees ? (
                <>
                    <input
                        type="text"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    />
                    <div className='flex flex-wrap justify-center'>
                        {
                        employees.map((employee)=>{
                            console.log(employee);
                            const editEmployee = <EditEmployee 
                                name={employee.name} 
                                role={employee.role} 
                                updateEmployee={updateEmployee} 
                                id={employee.id} 
                                img={employee.img}
                                />
                            return(
                                <Employee 
                                    key={employee.id}
                                    id={employee.id}
                                    name={employee.name} 
                                    role={employee.role} 
                                    img={employee.img}
                                    editEmployee={editEmployee} 
                            />);
                        })
                        }
                    </div>
                    <AddEmployee newEmployee={newEmployee} />
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;
