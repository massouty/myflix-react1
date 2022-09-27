import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import './login.scss';


 function Login (props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    
  };

  return (
    <form className="container">
      <Form.Group  controlId='formUsername'>
        <Form.Label>Username:</Form.Label>
         <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group  controlId='formPassword'>
        <Form.Label>password:</Form.Label>
         <Form.Control type="text" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}

Login.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
};

export default Login;