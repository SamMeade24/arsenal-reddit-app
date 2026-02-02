import React from 'react';

function ErrorMessage( { message }) {
    return (
        <section role="alert">
            <h1>{message || 'Something went wrong. Please try again.'}</h1>
        </section>
    );
}

export default ErrorMessage;