import { useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProfileItem from '../../components/profile-item/ProfileItem';

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
                <ProfileItem item={{ email: email }} />
                <ProfileItem item={{ info: info }} />
            </article>
        </main>
    );
}

export default Profile;