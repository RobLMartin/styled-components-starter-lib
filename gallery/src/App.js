import React from "react";
import "./App.css";

import { Button } from "starter-lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Cats</Button>
        <Button primary>Dogs</Button>
      </header>
    </div>
  );
}

export default App;
