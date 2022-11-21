import './post.css'
import {useState} from 'react'
import PostItem from './PostItem'
import EditPost from './EditPost'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './firebase'

function Post({id, title, description, completed}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  const handleChange = async () => {
    const postDocRef = doc(db, 'posts', id)
    try{
      await updateDoc(postDocRef, {
        completed: checked
      })
    } catch (err) {
      alert(err)
    }
  }

  /* function to delete a document from firstore */ 
  const handleDelete = async () => {
    const postDocRef = doc(db, 'posts', id)
    try{
      await deleteDoc(postDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className={`post ${checked && 'post--borderColor'}`}>
      <div>
        {/* <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked}
          onChange={handleChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label> */}
      </div>

      <div className='post__body'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='post__buttons'>
          <div className='post__deleteNedit'>
            <button 
              className='post__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Edit
            </button>
            <button className='post__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <PostItem 
          onClose={handleClose} 
          title={title} 
          description={description} 
          open={open.view} />
      }

      {open.edit &&
        <EditPost 
          onClose={handleClose} 
          toEditTitle={title} 
          toEditDescription={description} 
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Post