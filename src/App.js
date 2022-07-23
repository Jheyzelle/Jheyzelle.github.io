import './App.css';
import Contact from './components/Contact';
import TopNav from './components/TopNav';
import About from './components/About';
// import Projects from './components/Projects';
import Landing from './components/Landing';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <span id='page-top'></span>
      <TopNav></TopNav>
      <Landing></Landing>
      <About></About>
      {/* <Projects></Projects> */}
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
