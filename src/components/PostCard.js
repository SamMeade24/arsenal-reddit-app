import React from "react";

function PostCard({id, title, author, score, onSelect, isSelected }) {
    return (
        <div className="post-card" onClick={() => onSelect(id)}>
            {isSelected && <p>Selected</p>}
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Score: {score}</p>
        </div>
    );
}

export default PostCard;