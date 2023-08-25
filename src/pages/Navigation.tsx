import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext, { AuthContextType } from '../context/AuthContext';
const Navigation = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink to='/grocery'>Grocery</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>

        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>

        {auth.isLoggedIn && (
          <>
            <li>
              <NavLink to='/todos'>Todos</NavLink>
            </li>
            <li>
              <NavLink to='/addtodo'>Add Todos</NavLink>
            </li>
          </>
        )}
        {auth.isLoggedIn ? (
          <li>
            <button onClick={auth.logout}>Logout</button>
          </li>
        ) : (
          <li>
            <NavLink to='/Login'>Login</NavLink>
          </li>
        )}

        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
