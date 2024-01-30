import { useEffect, useState } from "react";
import Card from "./components/card";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const test = 'test';

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(json => {
      setData(json);
      console.log(json);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <>
        <Card
          input={data ? data.slip.advice : 'Loading...'}
        >
        </Card>
        <footer>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Jackcheal Dang</a>.
          </div>
        </footer>
    </>
  );
}
export default App;
