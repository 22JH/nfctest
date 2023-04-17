import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  // const ndef = new NDEFReader();
  const [status, setStatus] = useState("bad");
  useEffect(() => {
    console.log(window);
    window.onload = function () {
      if ("NDEFReader" in window) {
        setStatus("good");
      }
    };
  }, [status]);
  const clicked = () => {
    // const ndef = new NDEFReader();
  };
  return (
    <div>
      <h1>{status}</h1>
      <button onClick={() => clicked()}>"click"</button>
    </div>
  );
};

export default App;
