import React from "react";

function Comment({ author, text, score }) {
    return (
        <article>
            <p><strong>{author}</strong></p>
            <p>{text}</p>
            <p>▲ {score}</p>
        </article>
    );
}

export default Comment;