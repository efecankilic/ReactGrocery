import axios from 'axios';
const token = localStorage.getItem('token');
const TodoClientAPI = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': token,
  },
});

export const sendGetRequest = async () => {
  try {
    // let token = localStorage.getItem('token');
    // let config: any = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-auth-token': token,
    //   },
    // };

    // const response = await axios.get(
    //   'http://localhost:5000/api/todos/',
    //   config
    // );
    const response = await TodoClientAPI.get('api/todos/');
    return response.data;
    //console.log(response.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
