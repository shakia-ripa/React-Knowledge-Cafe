import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = blog =>{
    console.log(blog);
  }
  return (
    <>
      <div className='w-4/5 mx-auto'>
        <Header></Header>
        <div className='md:flex gap-6'>
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
