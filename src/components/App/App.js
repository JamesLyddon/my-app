import "./App.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";
import Main from "../Main/Main";

function App() {
  const name = "Star Wars Info";
  const [terms, setTerms] = useState([]);

  function addTerm(term) {
    let newTerms = new Set([term, ...terms]);
    setTerms(Array.from(newTerms));
  }

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className="content">
        <SearchHistory terms={terms} />
        <Main />
      </main>
    </div>
  );
}

export default App;
