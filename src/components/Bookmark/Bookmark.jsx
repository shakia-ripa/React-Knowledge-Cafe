import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-[#FFF] rounded-lg mt-4'>
            <h3 className='text-lg font-medium p-5'>{bookmark.title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;
