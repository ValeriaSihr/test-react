import { useEffect, useState } from 'react';
import './App.css'
// import users from './data/users.json'
import { UserList } from './UserList/UserList';
import { Modal } from './Modal/Modal';
import { FilterButtons } from './FilterButtons/FilterButtons';
import { fetchUsers } from './api/usersApi';



const App = () => {

  const [users, setUsers] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})
  const [filter, setFilter] = useState('all')
  const [filteredUsers, setFilteredUsers] = useState(users)

  const toggleModal = () => {
    setIsOpen((prev) => !prev)
    
  }
   const closeModal = (e) => {
     
     if (e.currentTarget === e.target) {
       setIsOpen(false)
     }
    
   }
  
  useEffect(() => {
    const getAllUsers = async () => {
    const endpoint = "/users";
      const usersArray = await fetchUsers(endpoint);
       setUsers(usersArray)
    }
    getAllUsers()
  
    
  },[])
  
  
  useEffect(() => {
     switch (filter) {
      case 'male':
        setFilteredUsers(users.filter(({male})=>male===true))
         break;
       
       case 'female':
        setFilteredUsers(users.filter(({male})=>male===false))
         break;
       
           
       default: setFilteredUsers(users);
         break;
         
     }
   }, [filter, users])
  

  return (
    <>
      <h1>Best Users!</h1>
      <FilterButtons setFilter={setFilter} />

      <UserList handleModal={toggleModal} users={filteredUsers} setUser={setUser}  />
      
       {isOpen && <Modal user={user} toggleModal={closeModal}/>}   
    </>
  );
}

export default App
