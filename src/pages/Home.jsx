import Hero from '../components/sections/Hero';
import Skils from './Skils';
import ProjectsPage from './ProjectsPage';
import Infra from '../components/sections/Infra';
import MiniProjects from './MiniProjects';
import About from './About';

const Home = () => {
  return (
    <>
      <Hero />
      <Skils />
      <ProjectsPage />
      <Infra />
      <MiniProjects />
      <About />
    </>
  );
};

export default Home;