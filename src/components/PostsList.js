import React from "react";
import PostCard from "./PostCard";

function PostsList({ posts, onPostSelect }) {
    return (
        <div className="posts-list">
            {posts.map((post) => (
                <PostCard 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    score={post.score}
                    onSelect={onPostSelect}
                />
            ))}
        </div>
    );
}

export default PostsList;