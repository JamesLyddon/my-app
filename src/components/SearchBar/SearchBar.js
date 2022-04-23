import "./searchbar.css";

export default function SearchBar(props) {
  function submitted(ev) {
    ev.preventDefault();
    props.addTerm(ev.target["keyword"].value);
  }

  function focused(ev) {}

  function changed(ev) {}

  function clicked(ev) {}

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          className="searchText"
          type="text"
          name="keyword"
          placeholder="keyword"
          onFocus={focused}
          onInput={changed}
        />
        <button
          className="searchBtn"
          type="submit"
          name="searchBtn"
          onClick={clicked}
        >
          Search
        </button>
      </form>
      {props.term ? <p>You searched for {props.term}</p> : ""}
    </section>
  );
}
