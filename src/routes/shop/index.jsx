import { useState, useEffect,useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

import ShopItems from '../../components/shop-component';
import SearchBox from '../../components/search-box/search-box.component';
import './shop.scss';

const Shop = () => {
  const [searchField, setSearchField] = useState('');
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
   
  useEffect(() => {
    const newFilteredProducts = products.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredProducts(newFilteredProducts);
  }, [products, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='shop'>
      <h1 className='app-title'>GODLY GAMERS</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='type something ...'
      />
      <ShopItems products={filteredProducts} />
    </div>
  );
};

export default Shop;
