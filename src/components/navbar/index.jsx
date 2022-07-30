import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as KingLogo } from '../../assets/shop-logo.svg';
import './navbar.styles.scss';

const Navbar = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='fake-navbar'>
        <Link className='logo-container' to='/'>
          <KingLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
