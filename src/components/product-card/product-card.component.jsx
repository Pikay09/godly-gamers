import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, final_price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <div>
          <span className='name'>{name}</span>
        </div>
        <div>
          <div>
          <s className='price'>RM{price}</s>
          </div>
          <div>
          <h3 className='final-price'>Sale Price: RM {final_price} </h3>
          </div>
        </div>
        
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
