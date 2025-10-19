import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        background: "#191b1f",
        alignItems: "center",
        direction: "rtl",
      }}
    >
      <TodoList></TodoList>
    </div>
  );
}

export default App;
