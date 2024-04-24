// Components
import ProfileItem from '../profile-item/ProfileItem';
import Button from '../button/Button';

// Icons
import { SlPencil } from 'react-icons/sl';

const UserProfile = ({ statusCode, statusMessage, username, email, info, edit, toggleEdit }) => {
    const icon = <SlPencil />;

    return (
        <>
            {/* Status message */}
            {
                statusMessage &&
                <p className={`statusCode-${statusCode}`}>
                    {statusMessage}
                </p>
            }
            {/* User profile */}
            <article className='profile-container'>
                <header className='profile-title'>
                    <h3>
                        {username}
                    </h3>
                    <Button
                        type='button'
                        buttonText='edit'
                        icon={icon}
                        onClick={() => toggleEdit(!edit)}
                    />
                </header>
                <ProfileItem item={{ email }} />
                <ProfileItem item={{ info }} />
            </article>
        </>
    );
}

export default UserProfile;