import "./header.css";
import Nav from "../Nav/Nav";

export default function Header(props) {
  let title = props.title;
  return (
    <header className="masthead">
      <h1>{props.companyName}</h1>
      <Nav title={title}/>
    </header>
  );
}
