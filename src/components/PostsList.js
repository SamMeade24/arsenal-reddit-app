import React from "react";
import PostCard from "./PostCard";

function PostsList({ posts, onPostSelect, selectedPostId }) {
    return (
        <section>
            {posts.map((post) => (
                <PostCard 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    score={post.score}
                    onSelect={onPostSelect}
                    isSelected={post.id === selectedPostId}
                />
            ))}
        </section>
    );
}

export default PostsList;