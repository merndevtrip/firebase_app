import './postCreator.css'
import Post from './Post_home'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import AddPost from './AddPost'

function PostCreator() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [posts, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const postColRef = query(collection(db, 'posts'), orderBy('created', 'desc'))
    onSnapshot(postColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='postCreator'>
      {/* <header>Feeds</header> */}
      <div className='postCreator__container'>
        
        <div className='postCreator__posts'>

          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              completed={post.data.completed}
              title={post.data.title} 
              description={post.data.description}
            />
          ))}

        </div>
      </div>

      {openAddModal &&
        <AddPost onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default PostCreator