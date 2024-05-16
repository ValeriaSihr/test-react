import { UserListItem } from "./UserListItem/UserListItem"

export const UserList = ({users, handleModal, setUser}) => {
    return <ul>
        {users.map((user) => 
            <UserListItem key={user.id} toggleModal={handleModal} user={user} setUser={setUser} />
            
        )}
      </ul>
}

