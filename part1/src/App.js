import "./App.css";
import Mensaje from "./Mensaje.js";

const Descripton = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'></Mensaje>
      <Mensaje color='green' message='En un curso'></Mensaje>
      <Mensaje color='yellow' message='De React'></Mensaje>
      <Descripton></Descripton>
    </div>
  );
};

export default App;
