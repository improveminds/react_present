import React, { useState } from 'react';
import axios from 'axios';

function UsernameVerification({ action }) {
    const [username, setUsername] = useState('');
    const [usernameAvailable, setUsernameAvailable] = useState(true);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleCheckUsername = () => {
        axios.get(`http://localhost:8080/api/users/verify-username?username=${username}`)
            .then(response => {
                setUsernameAvailable(!response.data);
            })
            .catch(error => {
                console.error('Error verifying username:', error);
            });
    };

    return (
        <div>
            <input
                type="hidden"
                value={username}
                onChange={handleUsernameChange}
            />
            {action === 'Sign Up' && (
                <button onClick={handleCheckUsername}>Check Username</button>
            )}
            {action === 'Sign Up' && !usernameAvailable && (
                <p>Username is already taken</p>
            )}
        </div>
    );
}

export default UsernameVerification;
