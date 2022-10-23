import './App.css';
import AllItems from './Components/AllItems/AllItems';
import Carousel from './Components/Carousel/Carousel';
import Ipad from './Components/Ipad/Ipad';
import Iphone14 from './Components/Iphone14/Iphone14';
import Iphone14Pro from './Components/iPhone14Pro/Iphone14Pro';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Ipad></Ipad>
      <Iphone14Pro></Iphone14Pro>
      <Iphone14></Iphone14>
      <AllItems></AllItems>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
