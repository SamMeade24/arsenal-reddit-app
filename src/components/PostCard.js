import React from 'react';

function PostCard({id, title, author, score, onSelect, isSelected }) {
    return (
        <article data-testid="post-card" onClick={() => onSelect(id)}>
            {isSelected && <p>Selected</p>}
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Score: {score}</p>
        </article>
    );
}

export default PostCard;