import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/commentsSlice';
import CommentList from './CommentList';

const mockComments = [
    {
        id: 1, 
        postId: 1, 
        author: 'Alice', 
        text: 'First comment', 
        score: 3,
    }, 
    {
        id: 2, 
        postId: 2, 
        author: 'Billy', 
        text: 'Second comment', 
        score: 2,
    }, 
    {
        id: 3, 
        postId: 3, 
        author: 'Bobby', 
        text: 'Third comment', 
        score: 5, 
    }, 
];

function renderWithStore(selectedPostId) {
    const store = configureStore({
        reducer: {
            comments: commentsReducer, 
        }, 
        preloadedState: {
            comments: {
                items: mockComments, 
            }, 
        }    , 
    });

    return render(
            <Provider store={store}>
                <CommentList selectedPostId={selectedPostId} />
            </Provider>
    ); 
};

describe('CommentList component', () => {
    test('renders only comments for the selected post', () => {
        renderWithStore(1);

        expect(screen.getByText('First comment')).toBeInTheDocument();
        expect(screen.queryByText('Second comment')).toBeNull();
        expect(screen.queryByText('Third comment')).toBeNull();
    });

    test('displays the correct total upvote score', () => {
        renderWithStore(1);

        expect(screen.getByText(/Total Upvotes: 3/i)).toBeInTheDocument();
    });

    test('updates total score when upvote and downvote buttons are clicked', async () => {
        const user = userEvent.setup();
        renderWithStore(1);

        const upvoteButton = screen.getByRole('button', { name: /upvote/i });
        const downvoteButton = screen.getByRole('button', { name: /downvote/i });

        await user.click(upvoteButton);
        await user.click(downvoteButton);

        expect(screen.getByText(/Total Upvotes: 3/i)).toBeInTheDocument();
    });
});