import Modal from "./Modal"
import {useState} from 'react'
 import './editPost.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebase'

function EditPost({open, onClose, toEditTitle, toEditDescription, id}) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const postDocRef = doc(db, 'posts', id)
    try{
      await updateDoc(postDocRef, {
        title: title,
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Post' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editPost'>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditPost