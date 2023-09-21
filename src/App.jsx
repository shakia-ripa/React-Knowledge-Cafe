import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {


  return (
    <div className=''>
      <div className='w-4/5 mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
