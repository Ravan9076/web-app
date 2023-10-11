import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import "./styles/transition.css";
import "./styles/App.css";
import MiniCart from "./Pages/MiniCart";

function App() {
  return (
    <>
      <Header />
      <Home />
      <MiniCart />
      <Footer />
    </>
 
  );
}

export default App;
