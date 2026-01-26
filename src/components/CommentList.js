import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from "./Comment";
import { upvote, downvote } from "../features/commentsSlice";

function CommentList( { selectedPostId }) {
    const comments = useSelector(state => state.comments.items);
    const dispatch = useDispatch();

    // filters comments for the selected post
    const commentsForPost = comments.filter(
        comment => comment.postId === selectedPostId
    );

    const handleUpvote = (id) => dispatch(upvote(id));
    const handleDownvote = (id) => dispatch(downvote(id));
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