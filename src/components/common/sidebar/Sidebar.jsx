import React from 'react';
import NavItem from '../navitem/Navitem';
import './Sidebar.css';
import logo from '../../../assets/images/uta.png';

const Sidebar = (props) => {
  const handleNavigation = (selectedItem) => () => props.onNav(selectedItem);

  return (
    
    <div className="Sidebar">
      <div className="Header-logo">
          <img src={logo} alt="" />
        </div>
      {props.items.map(item => (
        <NavItem
          key={item.title}
          title={item.title}
          vertical
          selected={item.id === props.selected}
          onNav={handleNavigation(item.id)}
        />
      ))}
    </div>
  );
};

export default Sidebar;