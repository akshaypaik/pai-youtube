import './Header.css';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';
import Searchbar from './Searchbar/Searchbar';

const Header = () => {
    return (
        <div className="header-container">
            <div className='menu-logo-container'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}>
                    <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" fill="white"></path>
                </svg>
                <Logo />
            </div>
            <Searchbar />
            <Profile />
        </div>
    )
}

export default Header;