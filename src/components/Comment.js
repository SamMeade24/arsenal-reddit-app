import React from "react";

function Comment({ author, text, score }) {
    return (
        <div>
            <p><strong>{author}</strong></p>
            <p>{text}</p>
            <p>▲ {score}</p>
        </div>
    );
}

export default Comment;