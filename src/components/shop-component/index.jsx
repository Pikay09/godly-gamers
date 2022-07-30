
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const ShopItems = ({products}) => {
  return (
    <div className='product-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopItems;
