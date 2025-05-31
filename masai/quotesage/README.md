
## **QuoteSage – A Daily Quote Generator**

### 🧠 **Objective**

Build a React-based web app that displays motivational quotes to the user. Users can:

* View a random quote
* Refresh to see a new one
* See the author's name
* Customize quote font size and theme color (props)
* Simulate local state changes (like "like" or "favorite" a quote)

---

### 📘 **Topics Covered**

| React Topic                           | How It’s Covered                                                                                                                       |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **JSX & Babel**                 | You will write UI using JSX syntax (React without HTML templates), rendered by Babel in dev setup.                                      |
| **Components & Props**          | Break UI into multiple reusable components like `QuoteCard`, `ThemeToggle`, and `QuoteButton`, passing props for styling or data. |
| **useState & State Management** | Use `useState` to handle quote data, theme changes, and UI toggles like font size.                                                    |
| **APIs & Axios**                | Fetch quotes from an external API (e.g.,`https://zenquotes.io/api/random`) using Axios and display the results.                       |

---

### 🧩 **Feature Requirements**

1. **Home Page Layout**
   * Display a single quote (content + author)
   * Button to fetch a new quote
   * Like button (changes icon state locally)
   * Optional: Dropdown to change font size
2. **Theme Toggle**
   * Light/Dark mode button (via props)
   * Colors and styles passed as props to components
3. **API Integration**
   * Use Axios to call `https://zenquotes.io/api/random`
   * On each "New Quote" click, fetch and display a new quote
4. **Component Design**
   * `QuoteCard`: Accepts quote, author, font size, and theme color as props
   * `ThemeToggle`: Button to toggle color theme
   * `QuoteButton`: A styled reusable button component
