import Modal from "./Modal"
import './postItem.css'

function PostItem({onClose, open, title, description}) {

  return (
    <Modal modalLable='Post Item' onClose={onClose} open={open}><br/>
      <div className='PostItem'>
        <h3>{title}</h3><br/>
        <p>{description}</p>
      </div>
    </Modal>
  )
}

export default PostItem