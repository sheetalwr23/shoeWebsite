import "./App.css";
import AddItems from "./Components/AddItem.js/AddItems";
import Header from "./UI/Header/Header";
import CartContext from "./store/CartContext";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <AddItems />
      </ContextProvider>
    </>
  );
}

export default App;
