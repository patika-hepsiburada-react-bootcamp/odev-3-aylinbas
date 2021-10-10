import "./App.css";
import Container from "./components/Container";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Container />
    </LanguageProvider>
  );
}

export default App;
