import React, { useState } from "react";
import Comment from "./Comment";

function CommentList( { selectedPostId }) {
    const initialComments = [
        { 
            id: 1, 
            postId: 1,
            author: "Ronnie Mewes", 
            text: "Since Jan 2024, City have spent £500m on 11 players!", 
            score: 21
        }, 
        {
            id: 2, 
            postId: 2, 
            author: "Mark Malavan", 
            text: "Funny how all of these City charges have silently fallen away!", 
            score: 14
        }
    ];

    const [comments, setComments] = useState(initialComments);

    const commentsForPost = comments.filter(
        comment => comment.postId === selectedPostId
    );

    const handleUpvote = (id) => {
        setComments(prevComments =>
            prevComments.map(comment =>
                comment.id === id
                ? { ...comment, score: comment.score +1 }
                : comment
            )
        );
    };

    const handleDownvote = (id) => {
        setComments(prevComments =>
            prevComments.map(comment => 
                comment.id === id
                ? {
                    ...comment,
                    score: comment.score > 0
                        ? comment.score - 1
                        : 0
                }
                : comment
            )
        );
    };

    const totalScore = commentsForPost.reduce(
        (total, comment) => total + comment.score, 
        0
    );
    
    return (
        <section>
            <p>Showing comments for post #{selectedPostId}</p>
            <p><strong>Total Upvotes: {totalScore}</strong></p>

            {commentsForPost.map(comment => (
                <Comment 
                    key={comment.id}
                    author={comment.author}
                    text={comment.text}
                    score={comment.score}
                    onUpvote={() => handleUpvote(comment.id)}
                    onDownvote={() => handleDownvote(comment.id)}
                />
            ))}
        </section>
    );
}

export default CommentList;