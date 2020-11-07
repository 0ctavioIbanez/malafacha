import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Platillos from './components/platillos/Platillos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Platillos />
    </div>
  );
}

export default App;
