import React, { useState } from "react";
import Form from "./components/Form";
import Barcode from "./components/Barcode";
import "./App.css";

function App() {
  const [barcode, setBarcode] = useState("");

  return (
    <div className="App">
      <div className="barcode-container">
        <h1>Barcode Generator</h1>
        <Form barcode={barcode} setBarcode={setBarcode} />
        <Barcode barcode={barcode} />
      </div>
    </div>
  );
}

export default App;
