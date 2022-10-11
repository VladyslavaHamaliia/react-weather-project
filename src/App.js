import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This project was coded by Vladyslava Hamaliia and is
          <a
            href="https://github.com/VladyslavaHamaliia/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
