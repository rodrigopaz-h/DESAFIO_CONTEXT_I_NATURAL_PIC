import {Gallery} from '../components/Gallery';
import {IconHeart} from '../components/IconHeart';

const Home = () => {
  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery showHeartIcon={true} />
      <IconHeart/>
    </div>
  );
};

export default Home;
