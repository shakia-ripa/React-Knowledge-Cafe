import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between py-4 my-8 border-b-2'>
            <h1 className='text-4xl font-semibold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;