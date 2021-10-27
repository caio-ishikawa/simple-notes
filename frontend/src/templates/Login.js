import { useState } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';

const Login = () => {
    Axios.defaults.withCredentials = true;
    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const getUsername = (e) => {
        setUsername(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const submitData = () => {
        const data = {
            username: username, 
            password: password
        };
        Axios.post('http://localhost:3002/auth/login', data)
        .then((res) => {
            console.log(res);
            history.push({
                pathname: '/notes',
                state: res.data
            })
        });
    };

    return(
        <div>
            <p>LOGIN</p>
            <input placeholder="username" onChange={(e) => getUsername(e)}/>
            <input placeholder="password" onChange={(e) => getPassword(e)}/>
            <button onClick={submitData}>Submit</button>
        </div>
    )
};

export default Login;