import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PubicRoutes =({ children })=> {
    const authUser = useSelector( state=> state.auth);
    
    if (authUser.isLoggedIn) {
        return <Navigate to="/dashboard" />
    }

    return children;
}

export default PubicRoutes;