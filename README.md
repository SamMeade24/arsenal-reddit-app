# Arsenal Reddit Comment Explorer

A Reddit-inspired content exploration app built with **React** and **Redux Toolkit**, developed as part of the **Codecademy Full-Stack Engineer Career Path**. 

The original project brief required building a Reddit client application using the Reddit API. During development, it became clear that the Reddit API endpoints required for the brief were no longer publicly accessible without authentication or paid access. Rather than abandon the project, I adapted my approach to ensure the **core learning objectives** of the brief were still fully met. 

This project therefore focuses on **state management, async data flow, UI state handling, testing, and deployment**, using a custom data source that mirrors real-world Reddit-style content. 

🔗 **Live demo:** https://arsenal-reddit-app.netlify.app/

---

## 1. Project Goals

The original Codecademy brief required:

- A React application using Redux for global state
- Async data fecthing from an external source
- Displaying a list of posts and their comments
- Handling loading and error states
- Writing unit and integration tests
- Deploying the finished app

All of these goals were met, despite the Reddit API limitaion. 

---

## 2. Adapted Approach

Because the Reddit API couldn't be used reliably:

- The app was restructured to simulate a Reddit-style experience
- Redux slices manage posts and comments as if they were fetched from an external API
- Async thunks replicate real-world request lifecycles (`idle`, `loading`, `fulfilled`, `rejected`)
- Error and loading states are fully implemented and tested

This ensured the project still demonstrates the **intentended architectural and technical skills**, not just API wiring. 

---

## 3. Tech Stack

- **React**
- **Redux Toolkit**
- **React Hooks**
- **CSS**
- **Jest & React Testing Library**
- **Cypress (E2E Testing)**
- **Netlify**

--- 

## 4. Features

- View a feed of posts (unfortunately not Arsenal related, due to Reddit API limitation)
- Select a post to view if it has any comments
- Loading and error states handled gracefully
- Clean, accessible UI
- Fully responsive layout
- Tested components and reducers
- Production deployment with strong Lighthouse scores

---

## 5. Testing

### Unit & Integration Tests
- Component rendering tests
- Redux slice logic tests
- Error and loading state coverage

### E2E Tests (Cypress)
- App load verification
- Post selection flow
- Comment rendering

---

## 6. Deployment

This app is deployed using **Netlify** with a production build from Create React App (Codecademy requirement). 

- CI build checks enabled
- ESLint errors resolved for production builds
- Optimised bundle output

---

## 7. Performance & Accessibility

Lighthouse audits were run on both desktop and mobile:

### Desktop
- **Performance:** 90
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Mobile
- **Performance:** 100
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

These results reflect a strong focus on accessibility, semantic HTML, and efficient rendering. 

---

## 8. Project Structure

src/
├── components/
│ ├── CommentList.js
│ ├── ErrorMessage.js
│ ├── Header.js
│ ├── LoadingSpinner.js
│ ├── PostCard.js
│ └── PostsList.js
├── features/
│ ├── postsSlice.js
│ └── commentsSlice.js
├── store.js
├── App.js
├── index.js
└── App.css

## 9. Key Learnings

- Moving from tutorials to real application logic is very challenging
- Redux state design matters more than expected
- Error handling and UI states are as important as the right journey paths
- Tooling (CI, ESLint, testing) becomes critical during deployment, something I overlooked. 
- Adapting to real-world constraints is part of being a real-world developer!

This project represents a genuine learning curve and reflects the realities of modern front-end development.

---

## 10. Possible Future Improvements

- Search and filter functionality (If Reddit restore the API again)
- Detailed post view using routing or modals
- Animataions and transitions
- API-backed data source with authentication
- Migration to Vite for smaller bundles

## Author

**Sam Meade**
MadeByMeade
Aspiring Full-Stack Developer
Built as part of the Codecademy Full-Stack Engineer Path