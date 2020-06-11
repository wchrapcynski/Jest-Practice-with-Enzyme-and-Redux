import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Headline from "./components/headline/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render posts"/>
      </section>
    </div>
  );
}

export default App;
