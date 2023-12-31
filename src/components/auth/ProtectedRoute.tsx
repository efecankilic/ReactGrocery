import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext, { AuthContextType } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  // if (!auth.isLoggedIn) {
  //   return <Navigate to='/login' replace />;
  // }
  // return <Outlet />;
  return auth.isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />;
};
export default ProtectedRoute;
