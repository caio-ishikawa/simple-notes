import { useState } from 'react';
import Axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const getUsername = (e) => {
        setUsername(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const submitData = () => {
        const data = {
            username: username,
            email: email,
            password: password
        };
        Axios.post('http://localhost:3002/auth/register', data)
        .then((res) => console.log(res));
    };

    return(
        <div>
            <p>REGISTER</p>
            <input placeholder="username" onChange={(e) => getUsername(e)}/>
            <input placholder="password" onChange={(e) => getPassword(e)}/>
            <input placeholder="email" onChange={(e) => getEmail(e)}/>
            <button onClick={submitData}>Submit</button>
        </div>
    )
};

export default Register;