type PostProps = {
  post: {
    body: string;
    title: string;
    id: number;
    userId: number;
  };
};

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h3>
        {post.id} - {post.title}
      </h3>
    </div>
  );
};

export default Post;
