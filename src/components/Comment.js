import React, { useState } from "react";

function Comment({ author, text, score }) {
    const [currentScore, setCurrentScore] = useState(score);

    return (
        <article>
            <p><strong>{author}</strong></p>
            <p>{text}</p>

            <p>Score: {currentScore}</p>

            <button onClick={() => setCurrentScore(currentScore + 1)}>Upvote</button>
        </article>
    );
}

export default Comment;