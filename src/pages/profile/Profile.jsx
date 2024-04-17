import { useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';

// Style
import './profile.css'

const Profile = () => {
    const { username, email, password, info } = useContext(AuthContext)

    return (
        <main>
            <SearchBar />
            <header>
                <h2>User profile</h2>
            </header>
            <article className='profile-container'>
                <header className='profile-title'>
                    <h3>{username}</h3>
                </header>
                <div className='profile-item-container'>
                    <h4>email</h4><p>{email}</p>
                </div>
                <div className='profile-item-container'>
                    <h4>about</h4>
                    <p>{info}</p>
                </div>
                
            </article>
        </main>
    );
}

export default Profile;