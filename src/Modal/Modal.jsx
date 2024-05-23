import * as SC from './Modal.styled'

export const Modal = ({ user, toggleModal }) => {
    return <SC.Backdrop>
        <SC.Modal>
          <SC.CloseBtn type='button' onClick={toggleModal}>X</SC.CloseBtn>
          <p>City:{user.address.city}</p>
                <p>Street:{user.address.street} {user.address.number}</p>
        </SC.Modal>
    </SC.Backdrop>
}