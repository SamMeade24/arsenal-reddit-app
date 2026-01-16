import React from 'react';
import './App.css';
import Header from "./components/Header";
import PostCard from './components/PostCard';

function App() {
  const dummyPosts = [
    {title: "Advantage Arsenal as they beat Chelsea 3-2", author: "Fabrizio Romano", score: 34}, 
    {title: "Attention turns to Forest away on Saturday", author: "David Ornstein", score: 12}
  ];
  
  return (
    <div className="App">
      <Header />
      {dummyPosts.map((post, index) => (
        <PostCard 
          key={index}
          title={post.title}
          author={post.author}
          score={post.score}
        />
      ))}
    </div>
  );
}

export default App;
