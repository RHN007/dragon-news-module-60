import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        <Spinner animation="border" variant="primary" />
    }
    const location = useLocation()
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
   }
   return children
};

export default PrivateRoutes;