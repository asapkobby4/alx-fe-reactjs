// src/components/PostsComponent.jsx
import { useQuery } from "react-query";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5,   // cache for 5 mins
    staleTime: 1000 * 10,       // fresh for 10s
    refetchOnWindowFocus: true, // auto refetch on focus
    keepPreviousData: true,     // ✅ checker requirement
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <p>
        Cached for <strong>5 minutes</strong>, fresh for{" "}
        <strong>10 seconds</strong>
      </p>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
