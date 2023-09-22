import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ">
            <div className='bg-[#6047EC1A] rounded-lg mb-5'>
                <h2 className='text-xl text-[#6047EC] font-medium text-center px-8 py-5 border-2 border-[#6047EC] rounded-lg'>
                    Spent time on read: {readingTime} min
                </h2>
            </div>

            <div className='bg-[#1111110D] rounded-lg p-6'>
                <h2 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;