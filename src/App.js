import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import PostsList from './components/PostsList';
import CommentList from './components/CommentList';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); // only taken the first 10 for simplicity
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return (
      <div>
        <Header />
        <LoadingSpinner />
      </div>
  );

  if (hasError) return (
      <div>
        <Header />
        <ErrorMessage />
      </div>
  );
 
  return (
    <main>
      <Header />

      {/* Buttons to simulate loading/error states */}
      <button onClick={() => setIsLoading(true)}>Simulate Loading</button>
      <button onClick={() => setHasError(true)}>Simulate Error</button>
      <button onClick={() => { setIsLoading(false); setHasError(false); }}>Reset</button>

      <PostsList posts={posts} onPostSelect={setSelectedPostId} selectedPostId={selectedPostId} />
      {selectedPostId && (<CommentList selectedPostId={selectedPostId} />)}
    </main>
  );
}

export default App;
