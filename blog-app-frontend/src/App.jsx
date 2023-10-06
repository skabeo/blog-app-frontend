import "./App.css";
import PostsList from "./feature/posts/PostsList";

function App() {
  return (
    <div className="app">
      <h1>React on Rails Blog</h1>
      <p>Find this application layout in src/App.jsx</p>
      <PostsList />
    </div>
  );
}

export default App;
