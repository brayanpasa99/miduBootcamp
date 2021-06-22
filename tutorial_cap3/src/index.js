import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles.css";

const WarningNotUsed = () => {
  return <h1>Todavía no se ha usado el contador</h1>;
};

const ListOfClicks = ({ clicks }) => {
  console.log({ clicks });
  return <p>{clicks.join(", ")}</p>;
};

const INITIAL_COUNTER_STATE = {
  left: 2,
  right: 4,
  mensaje: "Mensaje en el estado",
};

const App = () => {
  //const [left, setLeft] = useState(10);
  //const [right, setRight] = useState(20);

  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const newCounterState = {
      ...counters,
      left: counters.left + 1,
    };
    setCounters(newCounterState);
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
    });
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  const handleReset = () => {
    setCounters(INITIAL_COUNTER_STATE);
    setClicks([]);
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p>Clicks totales: {clicks.length}</p>
      <p>{counters.mensaje}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
