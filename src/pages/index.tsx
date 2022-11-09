import Gallery from '../home/gallery';
import Hero from '../home/hero';
import Timer from '../home/timer';

const Index = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Timer />
      <Gallery />
    </div>
  );
};

export default Index;
