import './App.css'
import ItemBoxes from './components/boxes/ItemBoxes';
import Header from './components/header/Header'
import Hero from "./components/hero/Hero";
import Services from './components/services/Services';

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <ItemBoxes />
    </>
  )
}

export default App
