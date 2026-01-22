import React from "react";

function Comment({ author, text, score, onUpvote }) {
    return (
        <article>
            <p><strong>{author}</strong></p>
            <p>{text}</p>

            <p>Score: {score}</p>

            <button onClick={onUpvote}>Upvote</button>
        </article>
    );
}

export default Comment;