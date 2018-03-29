import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const AdminInterface = props => {
  const InterfaceWrapper = styled.div`
    margin: auto;
    max-width: 800px;
  `;

  const InterfaceHeader = styled.div`
    font-size: 2rem;
    text-align: center;
  `;

  const NavBarWrapper = styled.div`
    margin: 2rem 0;
  `;

  const NavLink = styled(Link)`
    margin: 0 1rem;
    text-decoration: none;
  `;

  return(
    <InterfaceWrapper>
      <InterfaceHeader>Pourmans Admin Interface</InterfaceHeader>
      <NavBarWrapper>
        <NavLink to='/admin'>Home</NavLink>
        <NavLink to='/admin/events'>Events</NavLink>
        <NavLink to='/admin/products'>Products</NavLink>
        <NavLink to='/admin/about'>About</NavLink>
      </NavBarWrapper>
      {props.children}
    </InterfaceWrapper>
  )
}

export default AdminInterface;
