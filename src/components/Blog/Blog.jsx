import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
import './Blog.css';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of title ${title}`} />
            <div className='flex justify-between my-6'>
                <div className='author flex gap-4'>
                    <img src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p className='text-base font-medium text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='text-base font-medium text-[#11111199] flex items-center gap-2'>
                    <span className=''>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='my-4 text-base font-medium text-[#11111199]'>{
                hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a> </span>)
            }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time, id)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;