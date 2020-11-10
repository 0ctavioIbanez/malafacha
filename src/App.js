import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Platillos from './components/platillos/Platillos';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Platillos />
      <Footer />
    </div>
  );
}

export default App;
