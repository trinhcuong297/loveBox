import HightlightNews from '../component/HightLightPost';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Activ from './Activity';
import Cauro from './Carousel';
import Testimonial from './Testimonial';
import { Timeline } from './Timeline';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Cauro />
    <HightlightNews />
    <Activ />
    <Timeline />
    <Testimonial />
  </div>
);

export { Base };
