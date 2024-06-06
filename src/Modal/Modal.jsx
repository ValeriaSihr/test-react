import * as SC from './Modal.styled'

export const Modal = ({ user, toggleModal }) => {
    return <SC.Backdrop onClick={toggleModal}>
        <SC.Modal>
            <SC.CloseBtn type='button' onClick={toggleModal}>X</SC.CloseBtn>
            <SC.Avatar src={user.avatar} alt="avatar" width='100px' height='100px' />
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Pet:{user.pet}</p>
          <p>City:{user.address}</p>
                
        </SC.Modal>
    </SC.Backdrop>
}