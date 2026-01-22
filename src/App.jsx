import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Highlights from './components/Highlights';
import Colors from './components/Colors';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        <Hero />
        <Intro />
        <Highlights />
        <Colors />
        <Footer />
      </main>
    </>
  );
};

export default App;
