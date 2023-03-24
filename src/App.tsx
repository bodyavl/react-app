import { useState } from "react";
import Alert from "./components/Alert";

import Button from "./components/Button";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(true);
  };
  return (
    <div>
      {isVisible && (
        <Alert onClose={() => setIsVisible(false)}>
          Hello <b>Josh</b>
        </Alert>
      )}
      <Button onClick={handleClick}>Open</Button>
    </div>
  );
}

export default App;
