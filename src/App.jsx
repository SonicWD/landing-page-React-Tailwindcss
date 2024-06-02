import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans box-border bg-zinc-100">
      <Navbar />
      <ProductSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
