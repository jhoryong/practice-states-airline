import { useState } from "react";

const Search = ({ handleSearchValue }) => {
  const [dep, setDep] = useState("");
  const [des, setDes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    //console.log(e);
    if (e.target.id === "input-departure") setDep(e.target.value.toUpperCase());
    else if (e.target.id === "input-destination")
      setDes(e.target.value.toUpperCase());
  }

  function handleKeyUp(e) {
    //console.log(e);
    if (e.key === "Enter") handleSearchClick();
  }

  function handleSearchClick(e) {
    if (e) {
      e.preventDefault();
    }
    if (dep === "") {
      setErrorMsg("출발지를 입력하세요");
      return;
    }
    if (des === "") {
      setErrorMsg("도착지를 입력하세요");
      return;
    }
    if (dep === des) {
      setErrorMsg("출발지와 도착지가 같습니다");
      return;
    }

    handleSearchValue(dep, des);
    setErrorMsg("");
    console.log("sucess!");
  }

  return (
    <form>
      <fieldset>
        <legend>공항 코드를 입력하고, 검색하세요</legend>
        <label htmlFor="input-departure">출발지 </label>
        <input
          id="input-departure"
          type="text"
          placeholder="ICN, CJU"
          value={dep}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        ></input>
        <label htmlFor="input-destination">도착지 </label>
        <input
          id="input-destination"
          type="text"
          placeholder="ICN, CJU, PUS, BKK"
          value={des}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        ></input>
        <button id="search-btn" onClick={handleSearchClick}>
          검색
        </button>
        <span className="error-msg">{errorMsg}</span>
      </fieldset>
    </form>
  );
};

export default Search;
