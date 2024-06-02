import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans box-border bg-zinc-100 relative">
        <Navbar />
       {/* Aca para el Navbar cuadre con el producc section */}
        <div style={{ marginTop: "-95px" }}> 
        <ProductSection /> 
        <Form />
        <Footer />
        </div>
    </div>
  );
}

export default App;
