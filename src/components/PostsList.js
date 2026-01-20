import React from "react";
import PostCard from "./PostCard";

function PostsList({ posts }) {
    return (
        <div className="posts-list">
            {posts.map((post) => (
                <PostCard 
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    score={post.score}
                />
            ))}
        </div>
    );
}

export default PostsList;