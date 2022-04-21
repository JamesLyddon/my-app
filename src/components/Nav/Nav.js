import "./nav.css";
import Link from "../Link/Link";

export default function Nav() {
  const links = [
    { title: "Films", url: "https://swapi.dev/api/films/" },
    { title: "People", url: "https://swapi.dev/api/people/" },
    { title: "Planets", url: "https://swapi.dev/api/planets/" },
  ];

  return (
    <nav>
      {links.map((lnk) => (
        <Link key={lnk.title} lnk={lnk}/>
      ))}
    </nav>
  );
}
