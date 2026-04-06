import Home from './sections/Home';
import Projects from './sections/projects';      // lowercase
import Experience from './sections/Experiences';  // lowercase
import Contact from './sections/contact';
export default function Page() {
  return (
    <main className="pb-24 md:pb-0">
      <Home />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}