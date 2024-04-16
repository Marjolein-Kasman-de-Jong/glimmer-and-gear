import axios from 'axios';

async function createUser(formState, setStatusCode) {
    try {
        const response = await axios.post('https://api.datavortex.nl/glimmerandgear/users', {
            'username': formState.username,
            'email': formState.email,
            'password': formState.password,
            'info': formState.info,
            'authorities': [
                {
                    'authority': 'USER',
                },
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'glimmerandgear:60TTS2GBNi8Hyhi22dtu',
            },
        });
        setStatusCode(response.status);
    } catch (error) {
        setStatusCode('error');
        console.log(error);
    }
}

export default createUser;