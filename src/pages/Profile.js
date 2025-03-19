import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(state => state.user);

    if (!user) {
        return <h2>Please log in to view your profile.</h2>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
        </div>
    );
};

export default Profile;
