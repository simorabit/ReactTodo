import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { todosContext } from "../contexts/todosContext";
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "./contexts/todosContext";
const InitTodos = [
  {
    id: uuidv4(),
    Title: "قراءة كتاب",
    Description: "سيبيستنى تيسبتس تسيتيسب ا",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    Title: "قراءة كتاب",
    Description: "سيبيستنى تيسبتس تسيتيسب ا",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    Title: "قراءة كتاب",
    Description: "سيبيستنى تيسبتس تسيتيسب ا",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    Title: "قراءة كتاب",
    Description: "سيبيستنى تيسبتس تسيتيسب ا",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(InitTodos);
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
      <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
        <TodoList></TodoList>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
