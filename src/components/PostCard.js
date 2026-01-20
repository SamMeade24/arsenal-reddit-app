import React from "react";

function PostCard({id, title, author, score}) {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Score: {score}</p>
        </div>
    );
}

export default PostCard;