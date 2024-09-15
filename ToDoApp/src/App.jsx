import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [items, setItems] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 
  const [filter, setFilter] = useState("all"); 

 
  useEffect(() => {
    const savedItems = localStorage.getItem("todoItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputValue.trim() !== "") {
        setItems([...items, { text: inputValue, completed: false }]);
        setInputValue("");
      }
    }
  };

  const handleToggle = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleToggleAll = () => {
    const allCompleted = items.every((item) => item.completed);
    const newItems = items.map((item) => ({
      ...item,
      completed: !allCompleted,
    }));
    setItems(newItems);
  };

  const handleClearCompleted = () => {
    const newItems = items.filter((item) => !item.completed);
    setItems(newItems);
  };


  const filteredItems = items.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true; // "all" filtresi
  });

  return (
    <>
      <section className="todoapp">
        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyDown={handleKeyDown}
        />

        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={handleToggleAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {filteredItems.map((item, index) => (
              <li key={index} className={item.completed ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggle(index)}
                  />
                  <label>{item.text}</label>
                  <button
                    className="destroy"
                    onClick={() => handleDelete(index)}
                  ></button>
                </div>
                <input className="edit" value={item.text} />
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{items.filter((item) => !item.completed).length}</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                className={filter === "all" ? "selected" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={filter === "active" ? "selected" : ""}
                onClick={() => setFilter("active")}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={filter === "completed" ? "selected" : ""}
                onClick={() => setFilter("completed")}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={handleClearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
