export const UserListItem = ({ toggleModal, user, setUser }) => {
    
    const handleModal = () => {
        setUser(user)
        toggleModal()
    }

    return <li>
                <h2 onClick={handleModal}>{user.name}</h2>
            <span>Age: {user.age}</span>
            <span>Gender: {user.gender}</span>
   
          </li>
}