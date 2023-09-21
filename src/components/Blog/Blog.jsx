import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
           <h1>Title: {title}</h1> 
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;