import './App.css';
import PostsList from "./components/PostsList";
import AddPost from "./components/AddPost";

function App() {

  return (
      <div className="App">
        <div className="top-level-post">
          <AddPost />
        </div>
        <PostsList />
      </div>
  );
}

export default App;
