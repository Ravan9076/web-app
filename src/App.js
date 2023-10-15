// Date: 9/4/2021
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Index from "./Pages/index";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Product from "./Pages/Product";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Product/:Product_Type/:Company" element={<Product />} />
    </Routes>
    ,<Footer />
    </BrowserRouter>
    </>
 
  );
}

export default App;
