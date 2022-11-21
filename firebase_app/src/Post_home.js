import './post.css'
import {useState} from 'react'
import PostItem from './PostItem'




function Post({id, title, description, completed}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  

  return (
    <div className={`post ${checked && 'post--borderColor'}`}>
      <div>
      
      </div>
      <div className='post__body'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='post__buttons'>
          
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


    </div>
  )
}

export default Post