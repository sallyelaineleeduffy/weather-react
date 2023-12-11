import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
        <Weather city="Madrid" />
      </header>
    </div>
  );
}

export default App;
