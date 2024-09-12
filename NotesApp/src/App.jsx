import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="notesapp">
        <p>Notes App</p>
        <NotesApp />
      </div>
    </>
  );
}

export default App;

function NotesApp() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [search, setSearch] = useState("");

  const colorsData = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bfbc0",
    "#a0c4ff",
    "#b9fbc0",
  ];

  const addTestToList = () => {
    if (text.trim() !== "") {
      setItems([...items, { text, color: bgColor }]);
      setText("");
    }
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleColorChange = (color) => {
    setBgColor(color);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(search)
  );

  return (
    <div className="app-section">
      <input
        className="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <div className="notes">
        <textarea
          className="note"
          value={text}
          placeholder="Enter your note here... "
          onChange={handleTextChange}
          style={{ backgroundColor: bgColor }}
        />
        <div className="app-footer">
          <div className="color">
            <div className="color-palette">
              {colorsData.map((color, index) => (
                <div
                  key={index}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>
          <div>
            <button className="add-btn" onClick={addTestToList}>
              ADD
            </button>
          </div>
        </div>
      </div>
      <div className="  ulList">
        <ul className="list row">
          {filteredItems.map((item, index) => (
            <li
              className="list-item col-3 "
              key={index}
              style={{ backgroundColor: item.color }}
            >
              <div className="card  ">
                <div className="card-body">{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
