import { useState } from 'react';
import './App.css'
import users from './data/users.json'
import { UserList } from './UserList/UserList';
import { Modal } from './Modal/Modal';
console.log(users);


const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState({})

  const toggleModal = () => {
    setIsOpen((prev)=>!prev)
  }
  

  return (
    <>
      <h1>Best Users!</h1>
      <UserList handleModal={toggleModal} users={users} setUser={setUser} />
      
       {isOpen && <Modal user={user} toggleModal={toggleModal}/>}   
    </>
  );
}

export default App
