import { createSlice } from "@reduxjs/toolkit";

const initialComments = [
    { id: 1, postId: 1, author: "Ronnie Mewes", text: "Since Jan 2024, City have spent £500m on 11 players!", score: 21 }, 
    { id: 2, postId: 2, author: "Mark Malavan", text: "Funny how all of these City charges have silently fallen away!", score: 14 }, 
];

const commentsSlice = createSlice({
    name: "comments", 
    initialState: {
        items: initialComments, 
    }, 
    reducers: {
        upvote: (state, action) => {
            const comment = state.items.find(c => c.id === action.payload);
            if (comment) comment.score += 1;
        }, 
        downvote: (state,action) => {
            const comment = state.items.find(c => c.id === action.payload);
            if (comment && comment.score > 0) comment.score -= 1;
        }
    }
});

export const { upvote, downvote } = commentsSlice.actions;
export default commentsSlice.reducer;