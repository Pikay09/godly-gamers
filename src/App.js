import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Shop from './routes/shop';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
