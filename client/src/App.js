import "./App.css";
import { connectSocket } from "./socketApi";
import { useEffect } from "react";
import Container from "./components/Container";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <LanguageProvider>
      <Container />
    </LanguageProvider>
  );
}

export default App;
