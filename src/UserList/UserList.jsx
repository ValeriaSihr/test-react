import { UserListItem } from "./UserListItem/UserListItem"
import * as SC from './UserList.styled'

export const UserList = ({users, handleModal, setUser}) => {
    return <SC.UserList>
        {users.map((user) => 
            <UserListItem key={user.id} toggleModal={handleModal} user={user} setUser={setUser} />
            
        )}
      </SC.UserList>
}

