import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    
    const {createUser} = useContext(AuthContext)
    

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target; 
        const name = form.name.value; 
        const photoURL = form.photoURL.value; 
        const email = form.email.value; 
        const password = form.password.value
        console.log(name, photoURL, email, password)
        createUser(email, password)
        .then(result => {
            const user = result.user; 
            setError('')
            form.reset()
        })
        .catch(e => {
            console.error(e); 
            setError(e.message)
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Register;