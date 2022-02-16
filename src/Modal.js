import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const backdropStyle = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .5)',
  zIndex: 1000
}
const modalStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  backgroundColor: 'white',
  padding: '15px',
  zIndex: 1000,
  transform: 'translate(-50%, -50%)',
}

const Modal = ({open, onClose, isDropClose, children}) => {
  if(!open) return null;

  return (
    ReactDOM.createPortal(
      <Fragment>
      {isDropClose 
        ? <div style={backdropStyle} onClick={onClose} /> 
        : <div style={backdropStyle} />}
      <div style={modalStyle}>
        <button onClick={onClose}>close modal</button>
        {children}
      </div>
      </Fragment>,
      document.getElementById('modal')
    )
  )
}

export default Modal;