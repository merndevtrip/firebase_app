import Modal from "./Modal"
import {useState} from 'react'
import './addPost.css'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddPost({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new post to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'posts'), {
        title: title,
        description: description,
        // completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Submit Post' onClose={onClose} open={open}>

      <form onSubmit={handleSubmit} className='addPost' name='addPost'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter Subject'/>

        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Write Post....'
          value={description}></textarea>
        <button type='submit'>POST</button>
      </form> 

    </Modal>
  )
}

export default AddPost