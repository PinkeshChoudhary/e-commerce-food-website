import { useParams } from "react-router-dom";
import "./App.css";
import { Navbar } from "./MyComponents/Navbar";
import { Home } from "./pages/Home";
import { useState, useEffect } from "react";
function App() {
  const [text, setText] = useState("");
  const [searchMenuList, setsearchMenuList] = useState([]);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const searchMenuList = JSON.parse(localStorage.getItem("menu"));
    if (searchMenuList) {
      setsearchMenuList(searchMenuList);
      localStorage.removeItem("menu");
    }
  }, [text]);

  const handleSearch = () => {
    const newsearchMenuList = searchMenuList.filter((el) =>
      el.strMeal.toLowerCase().includes(text.toLowerCase())
    );
    setsearchMenuList(newsearchMenuList);
  };

  const clearText = () => {
    setText("");
    setsearchMenuList([]);
  };

  return (
    <div className="App">
      <Navbar
        onChangeHandler={onChangeHandler}
        handleSearch={handleSearch}
        clearText={clearText}
        text={text}
      />
      <Home text={text} searchMenuList={searchMenuList} />
    </div>
  );
}

export default App;
