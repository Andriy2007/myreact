import './App.css';
import Users from "./components/Users/users";
import Posts from "./components/Posts/posts";
import Comments from "./components/comments/comments";

function App() {
    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}
export default App;