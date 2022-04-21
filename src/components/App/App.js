import "./App.css";
import Header from "../Header/Header";

function App() {
  const name = "Acme";
  return (
    <div className="App">
      <Header companyName={name} title="hard coded" />
    </div>
  );
}

export default App;
