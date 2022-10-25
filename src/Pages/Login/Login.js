import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const {singIn} = useContext(AuthContext); 
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault(); 
        const form = event.target; 
        const email = form.email.value; 
        const password = form.password.value ; 
        singIn(email, password)
        .then(result => {
            const user = result.user; 
            console.log(user)
            form.reset()
            setError('')
            navigate('/')
        })
        .catch(error => {
            console.log(error); 
            setError(error.massage)
        } )
    
    }

    return (
        <Form onSubmit= {handleSubmit}>
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

export default Login;