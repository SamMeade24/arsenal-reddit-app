import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from "./components/Header";
import PostsList from './components/PostsList';
import CommentList from './components/CommentList';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchPosts } from './features/postsSlice';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts.items);
  const postsStatus = useSelector(state => state.posts.status);
  const postsError = useSelector(state => state.posts.error);
  
  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  if (postsStatus === 'loading') {
    return (
      <>
        <Header />
        <LoadingSpinner />
      </>
    );
  }
  
  if (postsStatus === 'rejected') {
    return (
      <>
        <Header />
        <ErrorMessage message={postsError}/>
      </>
    );
  }

  return (
    <main>
      <Header />

      <PostsList posts={posts} onPostSelect={setSelectedPostId} selectedPostId={selectedPostId} />
      {selectedPostId && (<CommentList selectedPostId={selectedPostId} />)}
    </main>
  );
}

export default App;
