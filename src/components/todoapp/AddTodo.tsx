import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { title, description } = formData;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    };

    const data = {
      title,
      description,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/todos',
        data,
        config
      );

      console.log('task added');
      navigate('/todos');
    } catch (e: any) {
      console.log(e.response.data.errors);
    }
  };
  return (
    <>
      <h1>Add Task</h1>
      <p>Create a new task</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type='description'
            placeholder='description'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Add Task' />
      </form>
    </>
  );
};

export default AddTodo;
