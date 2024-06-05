import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import News from "./components/News";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Atention from "./components/Atention";
import Certificates from "./components/Certificates";
import Maps from "./components/Maps"


function App() {
  return (
    <div className="font-sans box-border bg-zinc-100 relative">
      <Navbar />
      {/* Ajuste temporal para el margen superior */}
      <div style={{ marginTop: "-95px" }}>
        <ProductSection />
        <News />
        <Form />
        <Maps />
        <Atention />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}

export default App;
