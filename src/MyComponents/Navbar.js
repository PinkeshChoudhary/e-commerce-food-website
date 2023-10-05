import { Header } from "../styles";

export const Navbar = ({ onChangeHandler, handleSearch, clearText, text }) => {
  return (
    <Header>
      <p style={{ fontSize: "20px", fontWeight: "500" }}>Food App</p>
      <div className="searchbar">
        <input
          type="text"
          className="input"
          onChange={onChangeHandler}
          value={text}
        />
        <button onClick={handleSearch} className="searchbtn">
          search
        </button>

        <button onClick={clearText}>x</button>
      </div>
    </Header>
  );
};
