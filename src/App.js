import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
    const [role, setRole] = useState('dev');
    const showEmployees = true;
    const [employees, setEmployees] = useState(
        [
            {
                name:"Ron", 
                role:"Developer", 
                img:"https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
            },
            {
                name:"Steph", 
                role:"Tester", 
                img:"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg"
            },
            {
                name:"Karl", 
                role:"Security", 
                img:"https://images.pexels.com/photos/20787/pexels-photo.jpg"
            },
            {
                name:"Moss", 
                role:"DevOps", 
                img:"https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg"
            },
            {
                name:"Spongebob", 
                role:"Manager", 
                img:"https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg"
            },
            {
                name:"Booba", 
                role:"Sales", 
                img:"https://images.pexels.com/photos/1576193/pexels-photo-1576193.jpeg"
            }
        ]
    );
    return (
        <div className="App`">
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
                            return(
                                <Employee 
                                    key={uuidv4()}
                                    name={employee.name} 
                                    role={employee.role} 
                                    img={employee.img} 
                            />);
                        })
                        }
                    </div>
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;
