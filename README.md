# Arsenal Reddit Comment Explorer

## 1. Project Overview

The Arsenal Reddit Comment Explorer App is a Reddit-Style content application built as part of the **Codecademy Full-Stack Engineer Career Path**. 

The goal of the project was to build a real-world React application using **React and Redux**, integrating external API data, managing global state, and deploying the application to the web. 

This project intentionally reflects the realities of learning modern FE development:
- The app was **initially built using local React state**
- **Redux was added later**, requiring refactoring and debugging
- The **Reddit API could not be used** due to access and rate-limit restrictions
- A substitue API (**JSONPlaceholder**) was used instead and documented transparently

The focus of the project is learning, problem-solving, and architectural understanding - not perfection. 

---

## 2. Wireframes
Here are the planned wireframes for the application:

### Main Feed

**Wireframe:**
![Desktop Main Feed Page Wireframe](./docs/wireframes/images/desktop-main-feed-page.jpeg)
![Mobile Main Feed & Post Detail Page Wireframe](./docs/wireframes/images/mobile-homepage-post-page.jpeg)

---

### Post Comments View

**Purpose:** Allows users to explore discussions related to a selected post. 

**Key elements planned:**
- Post title and context
- Back to feed navigation
- Comment thread display
- Nested replies structure
- Loading and error states

**Wireframe:**
![Desktop Post Detail Page Wireframe](./docs/wireframes/images/desktop-post-detail-page.jpeg)

---

### Error & Empty States

Handling failure cases gracefully was a core design consideration. 

**Planned scenarios:**
- No internet or API unavailable
- No posts returned
- No comments returned
- API rate-limit issues

**Wireframes:**
![Desktop Error State Page Wireframe](./docs/wireframes/images/desktop-error-state.jpeg)
![Desktop Loading State Page Wireframe](./docs/wireframes/images/desktop-loading-state.jpeg)

---

## 3. Technologies Used

- React
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- HTML
- CSS
- JSONPlaceholder API
- Git & GitHub
- Netlify

---

## 4. Features Implemented

- Fetches posts from an external API
- Displays an initial list of posts on load
- Allows users to select a post
- Displays comments associated with the selected post
- Comment upvote and downvote functionality using Redux
- Global state management for posts and comments
- Loading and error states handled in the UI
- Modular,component-based architecture

---

## 5. Redux Implementation

### Why Redux Was Added Later

The application was originally built using **local component state**. 

As part of the project requirements, Redux was later introduced to better manage shared state and demonstrate understanding of global state architecture. 

This required:
- Creating Redux slices
- Configuring the Redux store
- Refactoring components to use `useSelector` and `useDispatch`
- Debugging state shape and reducer wiring issues

Whilst this process was challenging, it significantly improved my understanding of Redux in a real world scenario. 

---

### Posts Slice

- Uses `createAsyncThunk` to fetch posts
- Manages `loading`, `success`, and `error` states
- Stores posts in global state

### Comments Slice

- Stores comments in Redux state
- Handles upvote and downvote actions
- Demonstrates immutable state updates via Redux Toolkit

---

## 6. API Usage

### Intended API: Reddit

The original intention was to integrate directly with the Reddit API. 

However:
- Reddit API access was restricted
- OAuth requirements
- Rate limiting (Main reason)
- Client-side usage limitations

All of the above made it impractical for a publicly deployed project. 

### Actual API Used: JSONPlaceholder

To keep the project deployable and functional, **JSONPlaceholder** was used as a substitute API. 

This decision is documented intentionally, namely to demonstrate:
- Awareness of real-world API limitations
- Ability to adapt requirements
- Honest reflection on implementation constraints

---

## 7. Installation and Setup

1. Clone the repository:

git clone <https://github.com/SamMeade24/arsenal-reddit-app.git>

2. Navigate into the project directory:

cd arsenal-reddit-app

3. Install dependencies:

npm install

4. Run the app locally:

npm start

5. Open in your browser:

http://localhost:3000

## 8. Deployment

The application is deployed using Netlify, and can be accessed via (insert web address). 

Deployment was prioritised after core functionality and Redux integration was complete. 

## 9. Project Scope & Roadmap

This project satisfies the core functional requirements of the Codecademy brief.

The overall project scope includes:
- Search functionality for posts
- Filtering posts by predefined categories
- A dedicated post detail route or modal
- Responsive styling across devices
- Animations and transitions
- Unit and end-to-end testing
- Performance and accessibility optimisation

These items are intentionally documented as part of the project's planned scope and architectural design. 
