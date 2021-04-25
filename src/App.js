import './components/css/App.css';
import './components/css/fontawesome-free-5.15.3-web/css/all.min.css'
import Header from "./components/ui/Header";
import Container from "./components/ui/Container";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
