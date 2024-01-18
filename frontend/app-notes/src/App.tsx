import "./App.css";
import Home from "./Home";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;