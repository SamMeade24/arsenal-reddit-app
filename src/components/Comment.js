import React from 'react';

function Comment({ author, text, score, onUpvote, onDownvote }) {
    return (
        <article>
            <p><strong>{author}</strong></p>
            <p>{text}</p>

            <p>Score: {score}</p>

            <button onClick={onUpvote}>Upvote</button>
            <button onClick={onDownvote}>Downvote</button>
        </article>
    );
}

export default Comment;