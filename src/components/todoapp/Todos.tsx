import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { TodoType } from '../../models/todo';
//import { sendGetRequest } from '../../api/todoApi';

type PropsTodo = {
  todo: TodoType;
};
// type TodoType = {
//   description: string;
//   title: string;
//   status: boolean;
//   _id: number;
//   user: number;
// };
const Todos = () => {
  const auth = useContext(AuthContext) as AuthContextType;

  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    sendGetRequest2();
  }, []);

  const sendGetRequest2 = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };

      const response = await axios.get(
        'http://localhost:5000/api/todos/',
        config
      );
      //const response = await sendGetRequest();
      setTodos(response.data);
      //'console.log(response.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return (
    <div className='page-style'>
      {todos.length > 0 ? (
        todos.map((todo) => <Todo todo={todo} key={todo._id.toString()} />)
      ) : (
        <div> No Todo Found</div>
      )}
    </div>
  );
};

const Todo = ({ todo }: PropsTodo) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
};
export default Todos;
