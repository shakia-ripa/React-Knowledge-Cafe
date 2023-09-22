import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) =>{
    setReadingTime(readingTime+time);

    //remove read book from bookmark
    // console.log('reomove book', id);
    const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id!== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <div className='w-4/5 mx-auto'>
        <Header></Header>
        <div className='md:flex gap-6'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
