import "./App.css";
import Header from "../Header/Header.js";
import Card from "../Card/Card.js";

import data from "../../data.js";

function App() {
  // console.log(data);
  let cards = data.map((item) => <Card {...item} />);
  return (
    <div className="App">
      <Header></Header>
      <section>{cards}</section>
    </div>
  );
}

export default App;
