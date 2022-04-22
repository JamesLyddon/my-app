import "./searchbar.css";

export default function SearchBar(props) {
  function submitted(ev) {
    ev.preventDefault();
    console.log("submitted");
    props.addTerm(ev.target["keyword"].value);
    // setTerm(ev.target["keyword"].value);
  }

  function focused(ev) {
    console.log("onFocus");
  }

  function changed(ev) {
    console.log("onInput", ev.target.value);
  }

  function clicked(ev) {
    console.log("clicked");
  }

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
