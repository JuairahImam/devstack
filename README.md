# Dev Stack

A simple website where you can browse popular developer tools and save them into your own stack.

Pick a technology, add it to **Your Stack**, and remove it anytime. The list comes from a local JSON file, not from hardcoded data inside the component.

---

## Live site

- Live: _add your Vercel / Netlify link here_
- Repository: _add your GitHub repo link here_

---

## Technology I used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON

---

## Features

1. **Browse technologies** — cards show icon, badge, category, difficulty, and rating.
2. **Build your stack** — add a tool, see the count, remove one item or clear all.
3. **Toast alerts** — success, warning, and info messages when you add, duplicate, or remove.

---

## How to run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

---

## React questions

### 1. What is JSX, and why is it used in React?

**Answer:**  
JSX lets us write HTML-like code inside JavaScript. React uses it so the UI is easier to read and we can show data with `{ }`, like `{tech.name}` on a card.

### 2. What is the difference between props and state?

**Answer:**  
Props come from the parent and the child cannot change them. State lives inside the component and can change with `useState`. In this project, `tech` is a prop on the card, and `stack` is state in `Technologies`.

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**  
`useState` keeps data that can change and updates the screen when it changes. I used it for `technologies`, `stack`, and `loading` in `Technologies.tsx`, and for the mobile menu `open` in `Navbar.tsx`.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:**  
`useEffect` runs extra work after the page renders. I used it to `fetch` `/data/technologies.json` once when the page loads (`[]`). If I fetch while rendering, it can run again and again.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**  
The `key` helps React know which item changed, added, or removed. I used `key={tech.id}` on cards and `key={item.id}` on stack items so React does not mix them up.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:**  
Conditional rendering means showing different UI based on a condition. In `StackSidebar`, if `stack.length === 0` I show the empty message. Otherwise I show the list and the Remove All button. I also show “Loading technologies...” while `loading` is true.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**  
Parent to child is props. `Technologies` sends `tech`, `added`, and `onAdd` to `TechnologyCard`. Child to parent is a function prop. When I click Add, the card calls `onAdd(tech)`, and the parent updates `stack`. Remove works the same with `onRemove`.

---

## Author

juairah imam nafisa
