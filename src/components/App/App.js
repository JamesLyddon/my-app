import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchHistory from "../SearchHistory/SearchHistory";
import SearchResults from "../SearchResults/SearchResults";
import { useState, useEffect } from "react";

function App() {
  const name = "Star Wars Info";
  const [terms, setTerms] = useState([]);
  const [results, setResults] = useState([]);
  const [dataType, setDataType] = useState("films");

  function addTerm(term) {
    let newTerms = new Set([term, ...terms]);
    setTerms(Array.from(newTerms));
  }

  useEffect(() => {
    fetchData(terms[0]);
  }, [terms]);

  async function fetchData(keyword) {
    let url = `https://swapi.dev/api/${dataType}`;
    if (keyword) {
      url += `/?search=${keyword}`;
    }
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setResults(data.results);
  }

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <main className="content">
        <SearchHistory terms={terms} />
        <SearchResults results={results} type={dataType}/>
      </main>
    </div>
  );
}

export default App;
