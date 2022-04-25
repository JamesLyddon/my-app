import "./searchbar.css";

export default function SearchBar(props) {
  function submitted(ev) {
    ev.preventDefault();
    ev.target["keyword"].value && props.addTerm(ev.target["keyword"].value);
  }

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          className="searchText"
          type="text"
          name="keyword"
          placeholder="keyword"
        />
        <button className="searchBtn" type="submit" name="searchBtn">
          Search
        </button>
      </form>
      {props.term && <p>You searched for {props.term}</p>}
    </section>
  );
}

// {props.term ? <p>You searched for {props.term}</p> : ""}{props.term && <p>You searched for {props.term}</p>}
