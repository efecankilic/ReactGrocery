import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';

type PostType = {
  body: string;
  title: string;
  id: number;
  userId: number;
};

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendDeleteRequest = async () => {
    try {
      const response = await axios.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: 'foo',
          body: 'bar',
          userId: 1,
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPutRequest = async () => {
    try {
      const response = await axios.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     setPosts(responseData);
  //     console.log(responseData);
  //   });
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     setPosts(responseData);
    //     console.log(responseData);
    //   });
    // axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //   setPosts(response.data);
    //   console.log(response);
    // });
    sendGetRequest();
  }, []);

  return (
    <div>
      <button onClick={sendPostRequest}>Add Post</button>
      <button onClick={sendPutRequest}>Update Post</button>
      <button onClick={sendDeleteRequest}>Delete Post</button>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
