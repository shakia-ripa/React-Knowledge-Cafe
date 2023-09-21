import PropTypes from 'prop-types';
import './Blog.css';
const Blog = ({ blog }) => {
    const {cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of title ${title}`} />
            <div className='flex justify-between my-6'>
                <div className='author flex gap-4'>
                    <img src={author_img} alt="" />
                    <div>
                        <p className='text-xl'>{author}</p>
                        <p className='text-base'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h1 className='text-3xl font-semibold'>Title: {title}</h1>
            <p className='my-4'>{`#${hashtags[0]}  #${hashtags[1]}`}</p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;