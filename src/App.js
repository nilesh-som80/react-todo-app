import "./App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Todos from "./Components/Todos.js";
function App() {
  return (
    <div>
      <Header title="Todo App" searchBar={false} />

        <Todos />
        <Footer />

    </div>
  );
}

export default App;
