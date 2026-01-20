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
  
  const dummyPosts = [
    {id: 1, title: "Advantage Arsenal as they beat Chelsea 3-2", author: "Fabrizio Romano", score: 34}, 
    {id: 2, title: "Attention turns to Forest away on Saturday", author: "David Ornstein", score: 12}
  ];

  if (isLoading) {
    return (
      <div className="App">
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="App">
        <Header />
        <ErrorMessage />
      </div>
    );
  }
  
  return (
    <div className="App">
      <Header />
      <PostsList posts={dummyPosts} />
      <CommentList />
    </div>
  );
}

export default App;
