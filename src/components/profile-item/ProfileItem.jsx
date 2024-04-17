// Style
import './profile-item.css';

const ProfileItem = ({ item }) => {
    const itemName = Object.keys(item)[0];
    const itemValue = item[itemName];

    return (
        <div className='profile-item-container'>
            <h4>{itemName}</h4><p>{itemValue}</p>
        </div>
    );
}

export default ProfileItem;