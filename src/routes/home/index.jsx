import Button from '../../components/button/button.component';
import Navbar from '../../components/navbar';
// import './home.styles.scss';

const Home = () => {

  return (
    <>
    <Navbar/>
    <div>
      <h1>
        Welcome Gamers!
        
      </h1>
      <div className='button-styles'>
        <Button><a href={'./shop'}>Enter Shop</a></Button>
      </div>
      
    </div>
    </>
  );
};

export default Home;
