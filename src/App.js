import './components/css/App.css';
import './components/css/fontawesome-free-5.15.3-web/css/all.min.css'
import Header from "./components/ui/Header";
import Container from "./components/ui/Container";
import Footer from "./components/ui/Footer";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Container />
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
        style={{}}
        ToggledStyle={{}}
      />
      <Footer />
    </div>
  );
}

export default App;

