import React from 'react';
import './Header.css';
import { SearchOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProviser';
import { auth } from '../firebase';

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJltFpFixA1fGHg8OziTxZQrl8xAaxiENzpw&usqp=CAU"
          alt="logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchOutlined className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user  && '/login'}>
          <div onClick={handleAuthentication} className="header_optional">
            <span className="header_optional_lineOne">Hello {!user ? 'Guest' : user.email}</span>

            <span className="header_optional_lineTwo">
              {user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>
        <Link to='/orders'>
          <div className="header_optional">
          <span className="header_optional_lineOne">Returns</span>
          <span className="header_optional_lineTwo">& Orders</span>
        </div>
        </Link>
        
        <div className="header_optional">
          <span className="header_optional_lineOne">Your</span>
          <span className="header_optional_lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketOutlined />
            <span className="header_optional_lineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
