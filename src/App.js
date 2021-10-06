import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from './components/Post';
import { Pagination } from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const resp = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(resp.data);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  //Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Get current page
  const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Post posts={currentPost} loading={isLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginateHandler}
      />
    </div>
  );
}

export default App;
