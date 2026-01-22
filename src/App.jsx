import NavBar from './features/NavBar';
import Hero from './features/Hero';
import Intro from './features/Intro';
import Highlights from './features/Highlights';
import Cameras from './features/Cameras';
import Colors from './features/Colors';
import Footer from './features/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <main className="pt-8 sm:pt-20 mx-auto">
        <Hero />
        <Intro />
        <Highlights />
        <Cameras />
        <Colors />
        <Footer />
      </main>
    </>
  );
};

export default App;
