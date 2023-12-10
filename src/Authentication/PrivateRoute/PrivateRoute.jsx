import PropTypes from 'prop-types';

import { useContext } from 'react';

import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // Loading
    if (loading) {
        return <div className='flex justify-center items-center mt-36'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;