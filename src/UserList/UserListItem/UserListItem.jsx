import * as SC from './UserListItem.styled'

export const UserListItem = ({ toggleModal, user, setUser }) => {
    
    const handleModal = () => {
        setUser(user)
        toggleModal()
    }

    return <SC.Users>
            <h2 onClick={handleModal}>{user.name}</h2>
            <span>Age: {user.age}</span>
            <span>Gender: {user.male ? 'Male' : 'Female'}</span>
   
          </SC.Users>
}