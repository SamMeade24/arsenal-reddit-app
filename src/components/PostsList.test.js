import React from "react";
import { render, screen } from "@testing-library/react"
import PostsList from "./PostsList";

const mockPosts = [
    { id: 1, title: "Post 1", author: "Author 1", score: 10 }, 
    { id: 2, title: "Post 2", author: "Author 2", score: 5 }, 
];

describe('PostsList Component', () => {
    test('renders a list of posts', () => {
        render(<PostsList posts={mockPosts} onPostSelect={() => {}} selectedPostId={null} />);

        // Checks that post titles have been rendered
        mockPosts.forEach(post => {
            expect(screen.getByText(post.title)).toBeInTheDocument();
        });

        // Checks that authors have been rendered
        mockPosts.forEach(post => {
            expect(screen.getByText(new RegExp(post.author))).toBeInTheDocument();
        });
    });

    test('calls onPostSelect when a post is clicked', () => {
        const mockSelect = jest.fn();
        render(<PostsList posts={mockPosts} onPostSelect={mockSelect} selectedPostId={null} />);

        const firstPost = screen.getByText('Post 1');
        firstPost.click();
    
        expect(mockSelect).toHaveBeenCalledWith(1);
    });
});