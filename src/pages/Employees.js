import '../App.css';
import {useState} from 'react';
import Employee from '../components/Employee.js';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';


function Employees() {
  // Array av objekt
    const [employees, setEmployees] = useState([
      {
        id: 1,
        name: 'Diablo', 
        role: 'Lord of terror', 
        img: 'https://m.media-amazon.com/images/M/MV5BYzNmNTE4OWUtYTRiZi00Y2FiLWE2NDEtNTNhNjE2ZDg0ODY5XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg',
      },
      {
        id: 2,
        name: "Baal", 
        role: "Lord of destruction", 
        img: "https://www.purediablo.com/forums/media/resurrected-baal-lord-of-destruction.38034/full",
      },
      {
        id: 3,
        name: "Mephisto", 
        role: "Lord of hatred", 
        img: "https://i.redd.it/mephisto-the-lord-of-hatred-by-kevin-cassidy-v0-rgh3pgo35yb91.jpg?width=1728&format=pjpg&auto=webp&s=6a50256180eb1107d21acd1bc2be7542c2b9ecaf",
      },
      {
        id: 4,
        name: "Duriel", 
        role: "Bane of the desert", 
        img: "https://vignette.wikia.nocookie.net/villains/images/9/93/Duriel_render_%284%29.jpg/revision/latest?cb=20150703231130",
      },
      {
        id: 5,
        name: "Andariel", 
        role: "Queen of anguish", 
        img: "https://www.purediablo.com/forums/media/andariel.23289/full",
      },
      {
        id: 6,
        name: "Izual", 
        role: "Fallen angel", 
        img: "https://diablo2.io/download/file.php?id=76355&mode=view",
      },
    ]);
  
    function newEmployee(name, role, img) {
      const NewEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img,
      }
      setEmployees([...employees, NewEmployee])
    }

    function UpdateEmployee(id, newName, newRole) {
      const UpdatedEmployees = employees.map((employee) => {
        if (id == employee.id){
          return {...employee, name: newName, role: newRole};
        }
        return employee;
      });
      setEmployees(UpdatedEmployees);
    }

  return (
     <section>
        <h1 className="m-4 font-bold text-4xl text-center drop-shadow decoration-4 text-white">
            The evil legion
        </h1>

        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {   
            const editEmployee = (
                    <EditEmployee 
                      id={employee.id}
                      name={employee.name} 
                      role= {employee.role} 
                      UpdateEmployee={UpdateEmployee}
                      />
          );

              return (    
              <Employee 
                key={employee.id}
                id={employee.id}
                name={employee.name} 
                role={employee.role} 
                img={employee.img} 
                editEmployee={editEmployee}
              />
              );
          })}                
        </div>   
        <AddEmployee newEmployee={newEmployee}/>  
      </section>
  );
}

export default Employees;

