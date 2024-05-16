export const Modal = ({user, toggleModal}) => {
    return <div>
        <div>
          <button type='button' onClick={toggleModal}>X</button>
          <p>City:{user.address.city}</p>
                <p>Street:{user.address.street} {user.address.number}</p>
        </div>
    </div>
}