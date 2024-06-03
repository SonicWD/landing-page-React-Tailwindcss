import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import Form from './components/Form';
import Footer from './components/Footer';
import News from './components/News'

function App() {
  return (
    <div className="font-sans box-border bg-zinc-100 relative">
        <Navbar />
       {/* Aca para el Navbar cuadre con el producc section */}
        <div style={{ marginTop: "-95px" }}> 
        <ProductSection /> 
        <News/>
        <Form />
        <Footer />
        </div>
    </div>
  );
}

export default App;
