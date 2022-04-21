import "./header.css";
import Nav from "../Nav/Nav";

export default function Header({ companyName }) {
  return (
    <header className="masthead">
      <h1>{companyName}</h1>
      <Nav />
    </header>
  );
}
