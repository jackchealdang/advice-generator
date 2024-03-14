import { useEffect, useState } from "react";
import Card from "./components/card";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    getAPIData();
  }, []);

  function getAPIData() {
    setData({
      ...data,
      slip: {
        ...data?.slip,
        id: "----",
        advice: "Loading advice...",
      },
    });
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsWaiting(false);
      })
      .catch((error) => {
        console.error(error);
        setIsWaiting(false);
      });
  }

  function handleClick(e) {
    if (!isWaiting) {
      setIsWaiting(true);
      getAPIData();
    }
  }

  return (
    <body>
      <Card
        data={data ? data.slip : "Loading..."}
        handleClick={handleClick}
        isWaiting={isWaiting}
      ></Card>
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
    </body>
  );
}
export default App;
