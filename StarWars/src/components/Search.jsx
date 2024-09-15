import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <>
      <header className="header-section">
        <h1>STAR WARS</h1>
      </header>
      <div className="search-section">
        <p>Name/Model</p>
        <input
          className="search-input"
          placeholder="Name/Model"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Filter</button>
      </div>
    </>
  );
}

export default Search;
