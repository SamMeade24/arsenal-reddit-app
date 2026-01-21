import React, { useState } from 'react';
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
  
  const dummyPosts = [
    {id: 1, title: "Advantage Arsenal as they beat Chelsea 3-2", author: "Fabrizio Romano", score: 34}, 
    {id: 2, title: "Attention turns to Forest away on Saturday", author: "David Ornstein", score: 12}
  ];

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

      <PostsList posts={dummyPosts} onPostSelect={setSelectedPostId} selectedPostId={selectedPostId} />
      {selectedPostId && (<CommentList selectedPostId={selectedPostId} />)}
    </main>
  );
}

export default App;
