import React from "react";
import Comment from "./Comment";

function CommentList() {
    const dummyComments = [
        { 
            author: "Ronnie Mewes", 
            text: "Since Jan 2024, City have spent £500m on 11 players!", 
            score: 21
        }, 
        {
            author: "Mark Malavan", 
            text: "Funny how all of these City charges have silently fallen away!", 
            score: 14
        }
    ];
    
    return (
        <section>
            {dummyComments.map((comment, index) => (
                <Comment 
                    key={index}
                    author={comment.author}
                    text={comment.text}
                    score={comment.score}
                />
            ))}
        </section>
    );
}

export default CommentList;