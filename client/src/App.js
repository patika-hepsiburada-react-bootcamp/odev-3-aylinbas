import "./App.css";
import { connectSocket } from "./socketApi";
import { useEffect } from "react";
import Container from "./components/Container";
import { SurveyProvider } from "./context/SurveyContext";

function App() {
  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <SurveyProvider>
      <Container />
    </SurveyProvider>
  );
}

export default App;
