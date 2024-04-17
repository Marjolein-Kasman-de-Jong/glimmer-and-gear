// Components
import ProfileItem from '../profile-item/ProfileItem';
import Button from '../button/Button';

// Icons
import { SlPencil } from "react-icons/sl";

// Style
import './user-profile.css';

const UserProfile = ({ statusCode, statusMessage, username, email, info, edit, toggleEdit }) => {
    const icon = <SlPencil />;
    
    return (
        <>
            {statusMessage && <p className={`statusCode-${statusCode}`}>{statusMessage}</p>}
            <article className='profile-container'>
                <header className='profile-title'>
                    <h3>{username}</h3>
                    <Button type='button' buttonText='edit' icon={icon} onClick={() => toggleEdit(!edit)} />
                </header>
                <ProfileItem item={{ email: email }} />
                <ProfileItem item={{ info: info }} />
            </article>
        </>
    );
}

export default UserProfile;