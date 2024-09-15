import PropTypes from "prop-types";

function Header({ inputValue, setInputValue, handleKeyDown }) {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </form>
      </header>
    </>
  );
}

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};
export default Header;
