import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import PersonInfo from './components/PersonInfo/PersonInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PersonInfo/>
      <Footer/>
    </div>
  );
}

export default App;
