import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const name = "Acme";
  return (
    <div className="App">
      <Header companyName={name} />
    </div>
  );
}

export default App;
