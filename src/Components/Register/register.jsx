import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './register.scss';


 function Register (props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        props.onRegistration(username);
    };

    return (
    
    <form className="container">
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
       E-mail:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
       birthday:
        <input type="birthday" value={birthday} onChange={e => setBirthday (e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

Register.propTypes = {
    onRegistration: PropTypes.func.isRequired,
};

export default Register;
