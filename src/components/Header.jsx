import React, { Fragment, Suspense, useState, lazy } from 'react';
import Logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Group, ExitToApp, Notifications as NotificationsIcon, AddCircle, Search as SearchIcon } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import { Backdrop } from '@mui/material';

const Notifications = lazy(() => import('./Specific/Notifications'));
const NewGroup = lazy(() => import('./Specific/NewGroup'));
const Search = lazy(() => import('./Specific/Search'));

const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();
  const groups = () => {
    navigate('/groups');
  }
  const logout = () => {
    navigate('/login');
  }
  //burger
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  //search
  const openSearch = () => {
    setIsSearch(prev => !prev);
  }
  //createnewgroup
  const createNewGroup = () => {
    setIsNewGroup(prev => !prev);
  }
  //notification
  const openNotification = () => {
    setIsNotification(prev => !prev);
  }


  return (
    <Fragment>
      <div className='component header flex center-space wh'>
        <div className='header-burger' onClick={toggleMobileMenu} >
          <Menu />
        </div>
        <img className='logo' src={Logo} alt="logo" />
        <div className="nav-mobile flex">
          <SearchIcon onClick={openSearch} />
          <AddCircle onClick={createNewGroup} />
          <Group onClick={groups} />
          <NotificationsIcon onClick={openNotification} />
          <ExitToApp onClick={logout} />
        </div>
      </div>


      {isSearch && ( <Suspense fallback={<Backdrop open />}><Search /></Suspense> )}

      {isNotification && ( <Suspense fallback={<Backdrop open />}><Notifications /></Suspense> )}

      {isNewGroup && ( <Suspense fallback={<Backdrop open />}><NewGroup /></Suspense> )}


      <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <div className='drawer' onClick={toggleMobileMenu} onKeyDown={toggleMobileMenu}>
          <Link to="/">Home</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signp</Link>
        </div>
      </Drawer>
    </Fragment>
  )
}

export default Header